import { useDropzone } from 'react-dropzone';
import { Controller, useFormContext } from 'react-hook-form';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Label } from './Label';
import { useTranslation } from 'react-i18next';

export default function RHFUploadFilesController({ name, accept, containerClassName, defaultValue, maxFiles, maxSize, label, labelClassName, required }) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange }, fieldState: { error } }) => {
                return <RHFUploadFiles onChange={onChange}
                    error={error}
                    accept={accept}
                    containerClassName={containerClassName}
                    defaultValue={defaultValue}
                    maxFiles={maxFiles}
                    maxSize={maxSize}
                    label={label}
                    labelClassName={labelClassName}
                    required={required}
                />
            }}
        />
    );

}

function RHFUploadFiles({ onChange, error, accept, containerClassName, defaultValue, maxFiles, maxSize, label, labelClassName, required }) {

    const { t } = useTranslation();
    const [preview, setPreview] = useState(defaultValue || []);

    const handleDrop = (acceptedFiles) => {
        // Create preview URLs for the files
        const filesPreviews = acceptedFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file)
        }));
        setPreview(filesPreviews);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => {
            onChange(acceptedFiles);
            handleDrop(acceptedFiles);
        },
        accept,
        maxFiles,
        maxSize
    });

    const handleRemove = (index) => {
        const newPreview = preview.filter((_, i) => i !== index);
        setPreview(newPreview);
        onChange(newPreview.map(file => file.file));
    };

    return (
        <div className={`w-full ${containerClassName} flex flex-col gap-1`}>
            {label && (
                <Label
                    name={name}
                    required={required}
                    label={label}
                    labelClassName={labelClassName}
                />
            )}
            <div
                {...getRootProps()}
                style={{
                    border: '2px dashed #cccccc',
                    borderRadius: '4px',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                }}
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>{t('drop_files_here')}</p>
                ) : (
                    <p>{t('drag_and_drop_files')}</p>
                )}
            </div>

            {error && (
                <p style={{ color: 'red', marginTop: '8px' }}>{error.message}</p>
            )}

            {/* Preview section */}
            {preview.length > 0 && (
                <div className='mt-4 flex flex-wrap justify-center items-center'>
                    {preview.map((file, index) => (
                        <div key={index} className='mb-2 p-2 w-full md:w-1/2 lg:w-1/4 relative'>
                            {file?.file?.type?.startsWith('image/') ? (
                                <img
                                    src={file.preview}
                                    alt={`preview ${index}`}
                                    className='w-full h-60 object-cover'
                                />
                            ) : (
                                <p>{file.file.name}</p>
                            )}
                            <button
                                onClick={() => handleRemove(index)}
                                className='absolute bottom-0 right-0 bg-red-500 text-xs text-white px-2 py-1 rounded-md'>{t('remove')}</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

}

RHFUploadFilesController.propTypes = {
    name: PropTypes.string.isRequired,
    accept: PropTypes.object,
    containerClassName: PropTypes.string,
    defaultValue: PropTypes.array,
    maxFiles: PropTypes.number,
    maxSize: PropTypes.number
};
