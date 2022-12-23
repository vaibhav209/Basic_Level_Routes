const Updating = ()=>{
    return (
        <>
            <div style={{textAlign:'center', fontFamily: 'sans-serif', fontSize: '20px'}}>
                <h1>Updating</h1>
            </div>
            <div style={{ display: 'inline-block' }}>
                <p style={{ textAlign: 'justify', letterSpacing: '1px', marginLeft: '20px', marginBottom: '30px', fontWeight: '500.7' }}>
                It is the next phase of the lifecycle of a react component. Here, we get new Props and change State. The main aim of this phase is to ensure that the component <br />
                is displaying the latest version of itself. This phase consists of the following methods.
                </p>
                <ul style={{ fontFamily: 'inter-regular,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif', marginLeft: '16px', listStyleType:'circle' }}>
                    <li><strong>componentWillRecieveProps()</strong></li>
                    <p>
                    It is invoked when a component receives new props. If you want to update the state in response to prop changes, you should compare this.props and nextProps to perform state transition by using <strong>this.setState()</strong> method.
                    </p>
                    <li><strong>shouldComponentUpdate()</strong></li>
                    <p>
                    It is invoked when a component decides any changes/updation to the DOM. It allows you to control the component's behavior of updating itself. If this method returns true, the component will update. Otherwise, the component will skip the updating.
                    </p>
                    <li><strong>componentWillUpdate()</strong></li>
                    <p>
                    It is invoked just before the component updating occurs. Here, you can't change the component state by invoking <strong>this.setState()</strong> method. It will not be called, if <strong>shouldComponentUpdate()</strong> returns false.
                    </p>
                    <li><strong>render()</strong></li>
                    <p>
                    It is invoked to examine <strong>this.props</strong> and <strong>this.state</strong> and return one of the following types: React elements, Arrays and fragments, Booleans or null, String and Number. If shouldComponentUpdate() returns false, the code inside render() will be invoked again to ensure that the component displays itself properly.
                    </p>
                    <li><strong>componentDidUpdate()</strong></li>
                    <p>
                    It is invoked immediately after the component updating occurs. In this method, you can put any code inside this which you want to execute once the updating occurs. This method is not invoked for the initial render.
                    </p>
                </ul>
            </div>
        </>
    )
};
export default Updating;