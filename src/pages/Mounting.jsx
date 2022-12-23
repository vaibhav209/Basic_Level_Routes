const Mounting = () => {
    return (
        <>
            <div style={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '20px' }}>
                <h1>Mounting</h1>
            </div>
            <div style={{ display: 'inline-block' }}>
                <p style={{ textAlign: 'justify', letterSpacing: '1px', marginLeft: '20px', marginBottom: '30px', fontWeight: '500.7' }}>
                    In this phase, the instance of a component is created and inserted into the DOM. It consists of the following methods.
                </p>
                <ul style={{ fontFamily: 'inter-regular,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif', marginLeft: '16px', listStyleType:'circle' }}>
                    <li><strong>componentWillMount()</strong></li>
                    <p>
                        This is invoked immediately before a component gets rendered into the DOM. In the case, when you call <strong>setState()</strong> inside this method, the component will not <strong>re-render</strong>.
                    </p>
                    <li><strong>componentDidMount()</strong></li>
                    <p>
                        This is invoked immediately after a component gets rendered and placed on the DOM. Now, you can do any DOM querying operations.
                    </p>
                    <li><strong>render()</strong></li>
                    <p>
                        This method is defined in each and every component. It is responsible for returning a single root <strong>HTML node</strong> element. If you don't want to render anything, you can return a <strong>null</strong> or <strong>false</strong> value.
                    </p>
                </ul>
            </div>
        </>


    )
};
export default Mounting;