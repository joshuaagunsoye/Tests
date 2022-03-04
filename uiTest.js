import{render} from '@testing-library/react'

it('Ensure that the textbox with value pwd has placeholder Enter Password',()=>{
    const result = render(
        <input type="text" placeholder="pwd" name="pwd"/>
    )
    
    const textBox = screen.getByDisplayValue('pwd')
    const textBoxByPH = screen.getByPlaceholderText('Enter Password')
    expect(textBox).toBe(textBoxByPH)
    // screen.debug();

})