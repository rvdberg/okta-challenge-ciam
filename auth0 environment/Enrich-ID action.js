exports.onExecutePostLogin = async (event, api) => {
  //const namespace = 'https://pizza42/';
  const appMetadata = event.user.app_metadata || {};
  const clientMetadata = event.client.metadata || {};

  const Pizza42 = () => {
    /* Contract */
    const custom_data = {
      orderHistory: []
    }
    /* Mapping */
    const pizza42Data = appMetadata.pizza42_data || {};
    custom_data.orderHistory = pizza42Data.orderHistory || [];

    /* Delivery */
    //api.idToken.setCustomClaim(`${namespace}custom_data`, custom_data);
    api.idToken.setCustomClaim(`custom_data`, custom_data);
  }

  let { logical_name = '' } = clientMetadata;

  switch (logical_name) {
    case 'pizza42':
      Pizza42();
      break;
    default:
      break;
  }

  // Adding email verification info to simplify Pizza42 example solution
  api.accessToken.setCustomClaim('email_verified', event.user.email_verified);

};