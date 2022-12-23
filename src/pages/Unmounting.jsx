const Unmounting = () => {
    return (
        <>
            <div style={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '20px' }}>
                <h1>Unmounting</h1>
            </div>
            <div style={{ display: 'inline-block' }}>
                <p style={{ textAlign: 'justify', letterSpacing: '1px', marginLeft: '20px', marginBottom: '30px', fontWeight: '500.7' }}>
                It is the final phase of the react component lifecycle. It is called when a component instance is destroyed and unmounted from the DOM. <br />
                This phase contains only one method and is given below.
                </p>
                <ul style={{ fontFamily: 'inter-regular,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif', marginLeft: '16px', listStyleType:'circle' }}>
                    <li><strong>componentWillUnmount()</strong></li>
                    <p>
                    This method is invoked immediately before a component is destroyed and unmounted permanently. It performs any necessary <strong>cleanup</strong> related task such as invalidating timers, <br />
                    event listener, canceling network requests, or cleaning up DOM elements. If a component instance is unmounted, you cannot mount it again.
                    </p>
                </ul>
            </div>
        </>
    )
};
export default Unmounting;