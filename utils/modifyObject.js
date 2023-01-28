export const modifyObj = (userData) => {
  let newObj = {};
  for (let key in userData) {
    if (!Array.isArray(userData[key])) {
      newObj[key] = userData[key].value;
    } else {
      newObj[key] = userData[key];
    }
  }
  return newObj;
};

export const convertData = (data) => {
  const { filled, children, ...userData } = data;
  let applicationData = {};
  // for (let key in userData) {
  //   switch (key) {
  //     case 'email':
  //     case 'phoneNumber':
  //     case 'describePrimaryProductService':
  //     case 'uniqueProductService':
  //     case 'startupFinance':
  //     case 'productAmountRevenue':
  //     case 'statusOfProduct':
  //     case 'productRegisteredBusiness':
  //     case 'establishmentDate':
  //     case 'futurePlanOfExpanding':
  //     case 'previouslyParticipated':
  //     case 'numberOfCochildren':
  //     case 'equityShare':
  //     case 'otherOccupation':
  //     case 'timeCommitment':
  //     case 'willingnesssToRelocate':
  //       applicationData[key] = { value: userData[key], required: true };
  //       break;
  //     case 'healthRelated':
  //     case 'yesMoreDescription':
  //     case 'targetMarketCustomer':
  //     case 'competitors':
  //     case 'productLargeScale':
  //     case 'websiteForStartup':
  //     case 'applicationForStartup':
  //     case 'onlineMarketing':
  //     case 'socialMedia':
  //     case 'socialMediaPresence':
  //     case 'accesibleToDisabledPeople':
  //     case 'exitStrategy':
  //     case 'otherUniqueFeatures':
  //     case 'planToGrow':
  //     case 'planToCreateBrand':
  //     case 'expertiseInSRH':
  //     case 'motivationVideoUrl':
  //     case 'linkToApplication':
  //     case 'pitchDeckUrl':
  //     case 'businessCanvasUrl':
  //     case 'organizationalStructureUrl':
  //       applicationData[key] = { value: userData[key], required: false };
  //       break;
  //     default:
  //       break;
  //   }
  // }

  applicationData = { ...applicationData, children };
  console.log(applicationData);
  return applicationData;
};
