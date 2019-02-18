export const AlertType = {
  warning: 'warning',
  danger: 'danger',
  success: 'success',
};

export const StateRequestType = {
  InProcess: 'InProcess',
  Rejected: 'Rejected',
  Accepted: 'Accepted',
  Error: 'Error',
};

export class Table {
  constructor(table) {
    this.table = table;
  }
  AddRow(requestService) {
    const body = this.table.tBodies[0];
    const row = body.insertRow();
    row.innerHTML = ` <th scope="row">${1}</th>
                      <td>${requestService.name}</td>
                      <td>${requestService.date}</td>
                      <td><span class="badge badge-pill badge-info">${requestService.state}</span></td>`;
  }
}
export class Alert {
  constructor() {}
  RenderMessage(message, type) {
    switch (type) {
      case AlertType.warning:
        return `<div class="alert alert-warning col-12 alert-dismissible fade show" role="alert">${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
      case AlertType.danger:
        return `<div class="alert alert-danger col-12 alert-dismissible fade show" role="alert">${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
      case AlertType.success:
        return `<div class="alert alert-success col-12 alert-dismissible fade show" role="alert">${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
      default:
        return `<div class="alert alert-primary col-12 alert-dismissible fade show" role="alert">${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>`;
    }
  }
}
