/*
  * HOC - it is a function that takes in SourceComponent and returns a New Component 
  * it is a pattern 
*/
export const applyStyles = (OriginalComponent) => {
  const NewComponent = () => {
    const yellowContainer = {
      background: 'yellow',
      color: '#000',
      padding: '20px'
    }
    
    // Let's return JSX
    return(
      <div style={yellowContainer}>
        <OriginalComponent />
      </div>
    )
  }

  // Let's return the NewComponent
  return NewComponent;
}