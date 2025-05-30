import { getCreatedFromUrl } from '@/utils/functions'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const EntryOriginalLink = ({ data }) => {
  console.log(data,'-data-EntryOriginalLink-');
  
  const { t } = useTranslation();

  const original = useMemo(() => {
    return getCreatedFromUrl(data?.entry?.createdFrom, data?.entry?.createdFromId)
  }, [data])


  if (!original) return null;

  return (
    <Link
      to={original?.href}
      className={`bg-teal-500 hover:bg-teal-700 capitalize hover:text-white text-white py-1 px-2 text-sm ltr:ml-auto rtl:mr-auto rounded-md`}
    >
      {t('original')}
    </Link>
  )
}

export default EntryOriginalLink
