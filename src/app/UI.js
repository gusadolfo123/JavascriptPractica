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
  addCell(row, value, index, state) {

    var cell = row.insertCell(index);
    var newText = document.createTextNode(value);

    if (state) {
      let element = document.createElement('span');
      element.className = 'badge badge-pill badge-info';
      element.appendChild(newText);
      cell.appendChild(element);
    } else {
      cell.appendChild(newText);
    }

  }
  addRow(requestService) {

    var tableRef = this.table.tBodies[0];
    var newRow = tableRef.insertRow();

    for (const key in requestService) {
      if (requestService.hasOwnProperty(key)) {
        const element = requestService[key];
        console.log(element);
      }
    }

    this.addCell(newRow, 1, 0, false);
    this.addCell(newRow, requestService.name, 1, false);
    this.addCell(newRow, requestService.date, 2, false);
    this.addCell(newRow, requestService.state, 3, true);


    // var body = this.table.tBodies[0];
    // const row = body.insertRow();

    // row.innerHTML = ` <th scope="row">${1}</th>
    //                     <td>${requestService.name}</td>
    //                     <td>${requestService.date}</td>
    //                     <td><span class="badge badge-pill badge-info">${requestService.state}</span></td>`;
    // console.log(row);
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