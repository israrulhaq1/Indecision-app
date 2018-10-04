class Indecision extends React.Component {
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing three', 'Thing Four'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlepick() {
        alert('HandlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlepick}>What Should i do</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('handle remove all');
    }
    render() {
        return (
            <div>
            {this.props.options.length}
            <br/> <button onClick={this.handleRemoveAll}>Remove All</button>
            {
               
               this.props.options.map((option) => (
                   <Option key={option} optionText={option}/>
                ))
            }
            </div>
        );

    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(o) {
        o.preventDefault();
        const option = o.target.elements.option.value.trim();
        if(option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.handleAddOption}>          
                    <input type="text" name="option"/>
                    <button> Add option </button>
                </form>
            </div>
        );

    }
}


ReactDOM.render(<Indecision/>, document.getElementById('app'));