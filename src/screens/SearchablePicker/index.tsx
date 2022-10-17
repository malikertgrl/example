import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import RNSearchablePicker from 'react-native-searchable-picker';

const data = [
  {
    label: 'React',
    value: 'react'
  },
  {
    label: 'ali',
    value: 'ali'
  },
  {
    label: 'Ionic',
    value: 'ion'
  },
  {
    label: 'veli',
    value: 'veli'
  },
  {
    label: 'veci',
    value: 'veci'
  },
  {
    label: 'gs',
    value: 'gs'
  },
]
const SearchablePicker = () => {
  /**
   * Define local state for selected element
   */
  const [selected, setSelected] = useState();
  // var arr = []

  // const mapdata = data.map(function (x) {
  //   console.log(x.label)
  //   return {label: x.label.toUpperCase(), value: x.value.toUpperCase()}
  // })

  var upperCasedata = []

  for (let i = 0; i < data.length; i++) {
      // console.log(data[i].label.toUpperCase()) 
      // console.log(data[i].value.toUpperCase()) 
      console.log('eleman',data[i]) 
      const label = data[i].label.toUpperCase()
      const value = data[i].value.toUpperCase()
      const newobject =  {label,value}
      upperCasedata.push(newobject)
    
  }


  return (
    <SafeAreaView>
      <RNSearchablePicker
        onSelect={(text:any) => console.log(text)}
        data={upperCasedata}
        placeholder='Choose an item'
        defaultValue={upperCasedata[0].label}
        containerStyles={{ marginHorizontal: 10 }}
        listStyles={{ maxHeight: 250 }}
      />
    </SafeAreaView>

  );
}

export default SearchablePicker;