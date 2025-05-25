import { PlusIcon, MinusIcon } from '@/components/Icons'
import Btn from '@/components/shared/Btn'

const TableFormIncreasableControl = ({ append, grid, maxCount, remove, increaseContainerClassName }) => {  
  return (
    <div className={`flex items-center justify-between shadow bg-gray-100 dark:bg-dark-border ${increaseContainerClassName}`}>
      <Btn
        type="button"
        kind="info"
        disabled={grid.length === 0}
        onClick={() => remove(grid.length - 1)}
      >
        <MinusIcon circle className="h-4 w-4" />
      </Btn>
      <Btn
        type="button"
        kind="info"
        disabled={(maxCount && grid?.length === maxCount)}
        onClick={append}
      >
        <PlusIcon circle className="h-4 w-4" />
      </Btn>
    </div>
  )
}

export default TableFormIncreasableControl
