import Btn from './Btn'

const BtnGroups = ({
  list,
  renderItem
}) => {
  return (
    <div className='flex items-center gap-4 '>
      {list?.map(item => {
        if (renderItem) return renderItem(item)
        else return <Btn key={item?.name} onClick={item?.onClick} kind="info">{item?.name}</Btn>
      })}
    </div>
  )
}

export default BtnGroups