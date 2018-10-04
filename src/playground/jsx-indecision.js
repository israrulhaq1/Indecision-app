console.log('App.js is running');

const app = {
    Title: 'New Indecision App',
    Subtitle: 'Let the computer choose for you',
    Options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();    // this will prevent default full page reload thing Perfect!
    const option = e.target.elements.option.value;
    if(option) {
        app.Options.push(option);  //push add value into the options array
        e.target.elements.option.value = '';         //empty the text field input after pushing
        render();
    }

};

const onRemoveAll = () => {
    app.Options = [];
    render();
};

const onDecision = () => {
    const randomNum = Math.floor(Math.random() * app.Options.length);
    const givenOption = app.Options[randomNum];
    alert(givenOption);
};

const appRoot = document.getElementById('app');

const render= () => {
const template = (
<div>
    <h1> {app.Title} </h1>
    <p> {app.Subtitle} </p>
    <p> {app.Options.length > 0 ? 'Here are your options' : 'No Options'} </p>
    <p> {app.Options.length} </p>
    <button disabled={app.Options.length ==0} onClick={onDecision}> What should i do? </button>
    <button onClick={onRemoveAll}> Remove all </button>
    <ol>
        {
            app.Options.map( (opt) => {
                return <li key="opt"> {opt} </li>
            })
        }
    </ol>

    <form onSubmit = {onFormSubmit}>          
        <input type="text" name="option"/>
        <button> Add option </button>
    </form>
</div>
);

ReactDOM.render(template, appRoot);

};

render();



