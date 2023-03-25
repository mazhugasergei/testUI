export default () => {
  return (
    <main>

      <div className="container">
        <h3>Buttons</h3>
        <div className="flex">
          <button>Sign up</button>
          <button className="outline">Sign up</button>
          <button className="light">Sign up</button>
        </div>
        <div className="flex">
          <button className="small">Sign up</button>
          <button className="small outline">Sign up</button>
          <button className="small light">Sign up</button>
        </div>
        <div className="flex">
          <button disabled>Sign up</button>
          <button className="outline" disabled>Sign up</button>
          <button className="light" disabled>Sign up</button>
        </div>
        <div className="flex">
          <button className="small" disabled>Sign up</button>
          <button className="small outline" disabled>Sign up</button>
          <button className="small light" disabled>Sign up</button>
        </div>
      </div>

      <div className="container">
        <h3>Text Inputs</h3>
        <div className="flex col">
          <form className="text-form">
            <label htmlFor="textInput_01">Text input</label>
            <input id="textInput_01" type="email" placeholder="Enter your email" />
          </form>
          <form>
            <label htmlFor="textInput_02">Text input</label>
            <textarea id="textInput_02" placeholder="Enter your email"></textarea>
          </form>
        </div>
      </div>

      <div className="container">
        <h3>Checkboxes</h3>
        <form>
          <input className="checkbox-input" type="checkbox" name="checkboxGroup_01" id="checkboxGroup_checkbox_01" />
          <label className="checkbox-label" htmlFor="checkboxGroup_checkbox_01">
            <div className="checkbox"><div/></div>
            <span>Enter your label text</span>
          </label>
          <input className="checkbox-input" type="checkbox" name="checkboxGroup_01" id="checkboxGroup_checkbox_02" />
          <label className="checkbox-label" htmlFor="checkboxGroup_checkbox_02">
            <div className="checkbox"><div/></div>
            <span>Enter your label text</span>
          </label>
          <input defaultChecked className="checkbox-input" type="checkbox" name="checkboxGroup_01" id="checkboxGroup_checkbox_03" />
          <label className="checkbox-label" htmlFor="checkboxGroup_checkbox_03">
            <div className="checkbox"><div/></div>
            <span>Enter your label text</span>
          </label>
        </form>
      </div>

    </main>
  )
}