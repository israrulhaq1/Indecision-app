class Indecision extends React.Component {

    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    } 

    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
        
            if(options) {
            this.setState(() => ({options: options}));
                        }
            }catch(e) {
                    //Do nothing array options back to null
                    }
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('saving data');
        }
    }

    componentWillUnmount() {
        console.log('componentWillunmount');
    }

    handleDeleteOptions(){
        // this.setState(() =>{
        //     return {
        //         options: []
        //     };
        // })
       
        this.setState(() => ({options:[]}));
    }

    handleDeleteOption(optionToRemove){
       this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option)
       }))
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const givenOption = this.state.options[randomNum];
        alert(givenOption);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add option';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        // this.setState((prevState) =>{
        //     return {
        //         options: prevState.options.concat([option])   //we can add an array also simply (option)
        //     };
        // })

        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }

    render(){
        const subtitle = 'Put your life in the hands of computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                 />
                <Options
                 options={this.state.options}
                 handleDeleteOptions={this.handleDeleteOptions}
                 handleDeleteOption={this.handleDeleteOption}
                 />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}


//Converted to Stateless functional component from class type
// Header action Options and option are converted coz class type were overkill
// See documentation of these stateless functional components
// Stateless func components have access to Props though through parameter passed


const Header = (props) => {
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <p>{props.subtitle}</p>}
    </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What Should i do
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
        {props.options.length == 0 && <p>Please Add an option to get started</p>}
        <br/> <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
           
           props.options.map((option) => (
               <Option
                key={option}
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}/>
            ))
        }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button 
            onClick ={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
            >
            Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        //component based state is here below for updating error
        this.state = {
            error: undefined
        }
    }

    handleAddOption(o) {
        o.preventDefault();
        const option = o.target.elements.option.value.trim();
        o.target.elements.option.value = ''; 
        const error = this.props.handleAddOption(option); 

        // this.setState(() =>{
        //     return {
        //         error: error        // updating state with type of error in input field by user
        //     };
        // })

        this.setState(() => ({error}));

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.handleAddOption}>          
                    <input type="text" name="option"/>
                    <button> Add option </button>
                </form>
            </div>
        );

    }
}


ReactDOM.render(<Indecision />, document.getElementById('app'));