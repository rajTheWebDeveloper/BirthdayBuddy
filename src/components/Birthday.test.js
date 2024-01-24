import { render,screen,fireEvent, queryAllByRole, getAllByRole } from "@testing-library/react"
import BirthdayData from "../data/BirthdayData"
import Birthday from "./Birthday"


test('Whether Birthdays Are Rendering',()=>
{
    let {getByText,getByRole,getAllByRole,queryAllByRole}=render(<Birthday/>)
    let fiveBirthDays=getByText(/5 birthdays today/i)
    expect(fiveBirthDays).toBeInTheDocument()
    let clearButton=getByRole('clear-btn');
    expect(clearButton).toBeInTheDocument()
    let renderedBirthdays=getAllByRole('card')
    expect(renderedBirthdays.length).toEqual(BirthdayData.length)
    fireEvent.click(clearButton)
    let clearedBirthdays=queryAllByRole('card')
    expect(clearedBirthdays.length).toEqual(0)
})
