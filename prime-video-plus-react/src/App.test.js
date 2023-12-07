// Test Pattern: AAA (Arrange, Act, Assert)
// arrange
// import { render, screen } from "@testing-library/react";
import App from './App'; // sample it taken for testing

// test spec or test case or test 
test('has proper app component', () => {
  // Act (optional)
  // render(App);
  // Assert
  expect(App).toBeDefined();
});

/* 
  * test, expect, are from JEST
  * render, screen are from RTL
  * toBeDefined is known as a matcher -- from @testing-library/jest-dom
*/
