function Read() {
  return (
    <>
      <div className="container my-2">
        <h2 className="text-center">All data</h2>

        <div className="row">
          <div className="col-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  
                </h6>
                <p className="card-text">{age}</p>
                <a href="#" className="card-link">
                  Delete
                </a>
                <a href="#" className="card-link">
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Read;
