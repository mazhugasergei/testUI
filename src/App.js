export default () => {
  return (
    <main>
      <form>
        <input className="radio-input" type="radio" name="radioGroup_1" id="radio_1_1" />
        <label className="radio-label" htmlFor="radio_1_1">
          <div className="radio" />
          <span>Enter your label text</span>
        </label>
        <input className="radio-input" type="radio" name="radioGroup_1" id="radio_1_2" />
        <label className="radio-label" htmlFor="radio_1_2">
          <div className="radio" />
          <span>Enter your label text</span>
        </label>
        <input defaultChecked className="radio-input" type="radio" name="radioGroup_1" id="radio_1_3" />
        <label className="radio-label" htmlFor="radio_1_3">
          <div className="radio" />
          <span>Enter your label text</span>
        </label>
      </form>
    </main>
  )
}