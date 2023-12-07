// AAA
// Arrange
import { screen, render, fireEvent } from "@testing-library/react";
import CompanyInfo from "./CompanyInfo";

// group of related test specs -- a.k.a Test Suites
describe('CompanyInfo', () => {
  // test spec #1
  // Testing JSX
  it("has heading level 2 with Company info!!! text", () => {
    // Act
    render(<CompanyInfo />);
    const headingElement = screen.getByText("Company info!!!");
    // Assert
    expect(headingElement).toBeInTheDocument();
  });

  // test spec #2
  // Testing JSX
  it("has company name Bosch", () => {
    // Act
    render(<CompanyInfo />);
    const companyNameElement = screen.getByText("Bosch");
    // assert
    expect(companyNameElement).toBeTruthy();
  });

  // test spec #3
  // Testing Props
  it('receives foundedYear prop and displays it in JSX', () => {
    // Act
    render(<CompanyInfo foundedYear="2000" />);
    const foundedYearElement = screen.getByText("Founded Year: 2000");
    // Assert
    expect(foundedYearElement).toBeInTheDocument();
  });

  // Testing States and Events
  it('displays country name USA by default and updates JSX onChange of country input', () => {
    render(<CompanyInfo />);
    // find the input element
    const countryInput = screen.getByPlaceholderText("Enter Country Name");
    // then check whether the input has default value USA
    expect(countryInput.value).toBe('USA');

    const mockEvent = {
      target: {
        value: 'Australia'
      }
    }
    // mocking the keyboard event onChange
    fireEvent.change(countryInput, mockEvent);
    expect(countryInput.value).toBe("Australia");
    // TODO: also check the paragraph for country name change
  })
})


