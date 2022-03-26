const form = document.querySelector('[data-form]')
const queryParamsContainer = document.querySelector('[data-query-params]')
const requestHeadersContainer = document.querySelector('[data-request-headers]')
const keyValueTemplate = document.querySelector('[data-key-value-template]')
const responseHeadersContainer = document.querySelector('[data-response-headers]')


const createKeyValuePair = () => {
  const element = keyValueTemplate.content.cloneNode(true)
  element.querySelector('[data-remove-btn]').addEventListener('click', e => {
    e.target.closest('[data-key-value-pair]').remove()
  })
  return element
}

const keyValuePairsToObjects = (container) => {
  const pairs = container.querySelectorAll('[data-key-value-pair]')
  return [...pairs].reduce((data, pair) => {
    const key = pair.querySelector('[data-key]').value
    const value = pair.querySelector('[data-value]').value

    if (key === '') return data
    return { ...data, [key]: value }
  }, {})
}

document
  .querySelector('[data-add-query-param-btn]')
  .addEventListener('click', () => {
    queryParamsContainer.append(createKeyValuePair())
  })

document
  .querySelector('[data-add-request-header-btn]')
  .addEventListener('click', () => {
    requestHeadersContainer.append(createKeyValuePair())
  })

queryParamsContainer.append(createKeyValuePair())
requestHeadersContainer.append(createKeyValuePair())


// function to validate the url
const validate = (url) =>{ 
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol.val()
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

  if(url === '') return false; // if url is empty

  else if(!pattern.test(url)) return false;

  else return true;

};

const sendDetails = () => {
  const url = $('#url').val();
  const type = $('[data-method]').val();
  const header = keyValuePairsToObjects(requestHeadersContainer);
  const params = keyValuePairsToObjects(queryParamsContainer);

  if(!validate(url)) return alert('enter a valid url');

  $.ajax({
    type: type ,
    data: params,
    timeout: 60000, 
    url: url,
    params: params,
    headers: header,
})
  .catch(e => e)
  .then(response => {
  let parsedata = response;
  let DatainprettyFormat = JSON.stringify(parsedata,undefined,4);
  document.getElementById('prettyJSONFormat').value = DatainprettyFormat;
})
};

$(document).on('click','#sendDetails', () => {
  $('#sendDetails').click(function(event){
    event.preventDefault();
  });
  sendDetails();
});