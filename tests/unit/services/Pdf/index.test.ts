import Minio from '../../../../src/infrastructure/minio';

import PdfService from '../../../../src/services/Pdf';

jest.mock('../../../../src/infrastructure/minio');

describe('Service-Pdf', () => {
  const pdfService = new PdfService();

  test('DeletePdf', async () => {
    Minio.prototype.Delete = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({succees: true});
    });

    const result = await pdfService.DeletePdf({documentId: '1'});
    expect(result.success).toBe(true);
  });

});

