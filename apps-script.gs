/**
 * ROCCA Marmoraria - captura de leads da landing page
 *
 * Como publicar:
 * 1. Crie uma planilha no Google Sheets e abra Extensões > Apps Script
 * 2. Cole este código, salve
 * 3. Implantar > Nova implantação > Tipo: App da Web
 *    Executar como: eu | Quem tem acesso: qualquer pessoa
 * 4. Copie a URL gerada e cole em "var ENDPOINT" no index.html
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads')
             || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Leads');

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data', 'Nome', 'Telefone', 'E-mail', 'Cidade', 'Ambiente', 'Material', 'Perfil', 'Origem']);
      sheet.getRange(1, 1, 1, 9).setFontWeight('bold');
    }

    var d = JSON.parse(e.postData.contents);

    sheet.appendRow([
      d.data || new Date(),
      d.nome || '',
      d.telefone || '',
      d.email || '',
      d.cidade || '',
      d.ambiente || '',
      d.material || '',
      d.perfil || '',
      d.origem || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'erro', msg: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
