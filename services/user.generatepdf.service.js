class UserGeneratePdfService {
  constructor() { }
  async generatePDF(dataUser) {
    console.log("DataUserService", dataUser.result);
    const dataCompletePerson = dataUser.result;
    console.log("DataCompletePerson", dataUser);
    const res = JSON.parse(dataUser);
    console.log("res", res);
    for (const key in res){
      if(obj.hasOwnProperty(key)){
        console.log(`${key} : ${res[key]}`)
      }
    }


    let bodyHtml = "";
    try {
      let userDataClean = bodyHtml;
      dataCompletePerson.forEach(element => {
        userDataClean = userDataClean.replace(["Nombres"], element?.Nombres ?? string.Empty);
        userDataClean = userDataClean.replace(["Apellidos"], element?.Apellidos ?? string.Empty);
        userDataClean = userDataClean.replace(["Documento"], element?.Documento ?? string.Empty);
        userDataClean = userDataClean.replace(["NombresPadre"], element?.NombresPadre ?? string.Empty);
        userDataClean = userDataClean.replace(["ApellidosPadre"], element?.ApellidosPadre ?? string.Empty);
        userDataClean = userDataClean.replace(["NombresMadre"], element?.NombresMadre ?? string.Empty);
        userDataClean = userDataClean.replace(["ApellidosMadre"], element?.ApellidosMadre ?? string.Empty);
      });
      let base64 = ConvertHtmlToPdf(bodyHtml, footerHtml, pDataTemplate.LicenseIronPDF);
      return base64;
    } catch (error) {
      console.error(error);
    }
    return response;
  }
}



module.exports = UserGeneratePdfService;