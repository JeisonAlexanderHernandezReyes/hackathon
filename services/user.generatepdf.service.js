class UserGeneratePdfService {
  constructor() { }
  async generatePDF(dataUser) {
    const dataCompletePerson = dataUser;
    console.log("dataUserPDF", dataCompletePerson);



    return response;
  }

  async generaStructureCleanData(dataUser){
    try {
      const dataCompletePerson = dataUser;
      let userDataClean = {};
      dataCompletePerson.forEach(element => {
        userDataClean.nuip = element.nuip != undefined ? element.nuip : "";
        userDataClean.primerApellido =  element.primerApellido != undefined ? element.primerApellido : "";
        userDataClean.segundoApellido = element.segundoApellido != undefined ? element.segundoApellido : "";
        userDataClean.primerNombre = element.primerNombre != undefined ? element.primerNombre : "";
        userDataClean.segundoNombre = element.segundoNombre != undefined ? element.segundoNombre : "";
        userDataClean.municipioExpedicion = element.municipioExpedicion != undefined ? element.municipioExpedicion : "";
        userDataClean.departamentoExpedicion = element.departamentoExpedicion != undefined ? element.departamentoExpedicion : "";
        userDataClean.fechaExpedicion = element.fechaExpedicion != undefined ? element.fechaExpedicion : "";
      });
      console.log("dataClean" , userDataClean);
      return userDataClean;
  
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = UserGeneratePdfService;