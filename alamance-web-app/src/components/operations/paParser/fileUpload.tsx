export const fileUpload = async (url: string, upFile: File, keycloak: Keycloak.KeycloakInstance): Promise<any> => {
  let formData = new FormData();
  formData.append('file', upFile)
  return await new Promise(resolve => {
    fetch(url, {
      method: 'POST',
      body: formData,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${keycloak.token}`
        }
    })
      .then(response => response.json())
      .then(body => {
        resolve(body);
      });
  });
};
