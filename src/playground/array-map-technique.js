const app = {
    Title: 'Indecision App',
    Subtitle: 'Let the computer choose for you',
    Options: []
};


<ol>
        {
            app.Options.map( (opt) => {
                return <li key="opt"> {opt} </li>
            })
        }
    </ol>