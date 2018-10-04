class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);

        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            visibility: true
        };
    }

    handleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}>
                {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (<div> <p> here are the details you can see now</p></div>)}

            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));


// console.log('App is running');
// let visibility = false;

// const onDetails = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => { 
// const jsx = (
//     <div>
//     <h1> Visibility Toggle </h1>
//     <button onClick={onDetails}> {visibility ? 'hide details' : 'Show details' } </button>
//     {visibility && (
//         <div> <p> these are details you can see now! </p> 
//         </div>)
//     }
//     </div>
// );

// const appRoot = document.getElementById('app');
// ReactDOM.render(jsx, appRoot);

// };

// render();