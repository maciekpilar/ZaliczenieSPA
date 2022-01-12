import React from "react";
import './Form.css';
import '../App.css';


function Form() {
    return(
        <section   id="form">
            <div class="testbox">
                <form className="form" action="/">
                <h1>Pomóż nam się rozwijać</h1>
                <p class="question">Czy to Twój pierwszy raz na naszej stronie?</p>
                    <div class="question-answer">
                      <label><input className="form-input" type="radio" value="none" name="visited" required/> Tak </label>
                      <label><input className="form-input" type="radio" value="none" name="visited" required/> Nie </label>
                    </div>
                    <p class="question">Czego szukałeś?</p>
                    <textarea className="form-txt"rows="5" required></textarea>
                    <p class="question">Znalazłeś to?</p>
                    <div class="question-answer">
                      <label><input className="form-input" type="radio" value="none" name="needed" required/> Tak, wszystko co chciałem</label>
                      <label><input className="form-input" type="radio" value="none" name="needed" required/> Tak, ale nie wszystko</label>
                      <label><input className="form-input" type="radio" value="none" name="needed" required/> Nie</label>
                    </div>
                    <div class="btn-block">
                        <button  className="btn-form" type="submit" href="/">Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Form