const ErrorPage = () => {
    const goBack = () => {
        window.history.back();
    }
    return (
        <div  className="h-screen flex justify-center items-center">
            <div>
               <h1 className="text-2xl font-extrabold my-10">  OOOPs... Route not found... click to Go back. </h1>
            <button onClick={goBack} className="btn btn-warning flex justify-center items-center">Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;