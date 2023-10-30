import { useEffect, useState } from 'react'
import financeNames from '../financeNames'
import TextInput from './TextInput.jsx'

export default function FinanceInputList(props) {
  const [inputNames, setInputNames] = useState(financeNames[props.category].map(item => {
    return {
      name: item.name,
      value: 0
    }
  }));

  const [nums, setNums] = useState([])

  useEffect(() => {
    console.log(nums)
    if (nums) {
      calculateTotal();
    }
  }, [nums]);

  function handleUpdate(event) {
    let updateValue = event.target.value ? event.target.value : 0.00
    setNums(prev => {
      return {
        ...prev,
        [event.target.name]: parseFloat(updateValue).toFixed(2)
      }

    })
    calculateTotal();
  }

  function calculateTotal() {

    let totalValue = parseFloat(0.00);
    Object.entries(nums).forEach(([key, value]) => {
      let valueToAdd = parseFloat(value).toFixed(2);

      if (Number.isNaN(valueToAdd) == false) {
        totalValue = (parseFloat(totalValue) + parseFloat(valueToAdd)).toFixed(2);
      }
    })

    for (let i = 0; i < nums.length; i++) {
      totalValue = totalValue + parseFloat(Object.values(nums[i])).toFixed(2);
    }
    props.updateTotal(totalValue, props.category)
  }



  const financeElements = inputNames.map(item => {
    return <TextInput type="number" name={item.name} className="form--input" value={item.value} onChange={handleUpdate} key={item.name} />
  })


  return (
    <>
      {financeElements}
    </>
  )
}
