import React from 'react'
import { shallow } from 'enzyme'
//shallow =>targetting component to wrap up
import Counter from './Counter'
it(`increments count by 1 when the increment count is clicked`,()=>{
    //  targetting components using shallow 
    const wrapper = shallow(<Counter/>)
    //targetting element using className
    const incrementButton = wrapper.find('button.increment')
    //simulating action click using simulate function
    incrementButton.simulate('click') 
    //targetting element h1 and fetching text using text function
    const text = wrapper.find('h1').text()

    // Assertions 
    expect(text).toEqual('Value : 1')
 })