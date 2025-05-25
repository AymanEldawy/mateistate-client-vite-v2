import { TrashIcon } from "@/components/Icons"
import Btn from "@/components/shared/Btn"

const TableFormBody = ({ fields, withoutAction, renderFields, remove, tbodyClassName, trClassName, tdClassName, customIndex }) => {

  console.log(trClassName,'trClassName');
  
  return (
    <tbody className={`${tbodyClassName}`}>
      {fields.map((item, index) => (
        <>
          <tr key={item.id || index} className={`${trClassName && trClassName(index)}`}>
            {customIndex ? null :
              <td className={`border min-w-[25px] text-center`}>
                {index + 1}
              </td>
            }
            {renderFields(item, index)}
            {withoutAction ? null :
              <td className={`${tdClassName} border`}>
                <Btn type="button" kind="error" containerClassName="mx-auto !scale-[90%]" onClick={() => remove(index)}>
                  <TrashIcon className="h-4 w-4" />
                </Btn>
              </td>
            }
          </tr>
        </>
      ))}
    </tbody>)
}

export default TableFormBody