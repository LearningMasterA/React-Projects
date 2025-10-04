function ToDOItem1() {
  let todoName='Buy milk';
  let todoDate='4/10/2003';
  return <div class="container text-center">
      <div class="row mt-3">
        <div class="col-6">
          {todoName}
        </div>
        <div class="col-4">
          {todoDate}
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
      </div>
}
export default ToDOItem1;
