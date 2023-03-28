# UI Components



### Buttons
<img src="/src/assets/images/readme/buttons.png" />

```html
<button>Sign up</button> <!-- or 'a' with class 'btn' -->
<button className="white">Sign up</button>
<button className="light">Sign up</button>
<button className="small">Sign up</button>
<button className="small white">Sign up</button>
<button className="small light">Sign up</button>
<button disabled>Sign up</button>
<button disabled className="white">Sign up</button>
<button disabled className="light">Sign up</button>
<button disabled className="small">Sign up</button>
<button disabled className="small white">Sign up</button>
<button disabled className="small light">Sign up</button>
```



### Text Inputs
<img src="/src/assets/images/readme/text_inputs.png" />

```html
<form>
  <label htmlFor="textInput_01">Text input</label>
  <input id="textInput_01" type="email" placeholder="Enter your email" />
</form>
<form>
  <label htmlFor="textInput_02">Text input</label>
  <textarea id="textInput_02" placeholder="Enter your email"></textarea>
</form>
```



### Checkboxed Inputs
<img src="/src/assets/images/readme/checkboxes_input.png" />

```html
<form>
  <input className="checkbox-input" type="checkbox" name="checkboxGroup_1" id="checkbox_1_1" />
  <label className="checkbox-label" htmlFor="checkbox_1_1">
    <div className="checkbox"><div/></div>
    <span>Enter your label text</span>
  </label>
  <input className="checkbox-input" type="checkbox" name="checkboxGroup_1" id="checkbox_1_2" />
  <label className="checkbox-label" htmlFor="checkbox_1_2">
    <div className="checkbox"><div/></div>
    <span>Enter your label text</span>
  </label>
  <input defaultChecked className="checkbox-input" type="checkbox" name="checkboxGroup_1" id="checkbox_1_3" />
  <label className="checkbox-label" htmlFor="checkbox_1_3">
    <div className="checkbox"><div/></div>
    <span>Enter your label text</span>
  </label>
</form>
```



### Radio Inputs
<img src="/src/assets/images/readme/radio_input.png" />

```html
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
```