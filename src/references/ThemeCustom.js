import { createContext, useContext } from 'react'

const ThemeContext = createContext(null);

export default function ThemeCustom() {
  return (
    <ThemeContext.Provider value="dark">
        <Form/>
    </ThemeContext.Provider>
  );
}

function Form() {
    return (
        <Panel title="Welcome">
            <Button show={true}>Sign Up</Button>
            <Button show={false}>Log In</Button>
        </Panel>
    );
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

function Button({ show, children }) {
    const theme = useContext(ThemeContext);
    if (show) {
        const className = 'button-' + theme;
        return (
            <button className={className}>
                {children}
            </button>
        );
    }
    return false
}