import 'babel-polyfill';
import {
  Table,
  Alert,
  AlertType
} from './UI';
import {
  RequestService
} from './RequestService';

const form = document.getElementById('formRequests');
const table = document.getElementById('tableRequests');
const alerts = document.getElementById('alerts');

const UITable = new Table(table);
const UIAlert = new Alert();

// UITable.AddRow(alert);

form.addEventListener('submit', e => {
  e.preventDefault();
  const username = document.getElementById('name').value;
  const docNumber = document.getElementById('document').value;
  const date = new Date();
  const requestService = new RequestService(username, docNumber);
  try {
    requestService.send();
    const result = requestService.getState();
    result.then(res => console.log('Result: ' + res));
    UITable.addRow(requestService);
    const alert = UIAlert.RenderMessage('Solicitud Enviada Correctamente.', AlertType.success);
    alerts.innerHTML = alert;
  } catch (error) {
    console.log(error);
    const alert = UIAlert.RenderMessage(error, AlertType.danger);
    alerts.innerHTML = alert;
    return;
  }

  requestService.state;
});