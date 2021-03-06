import $ from 'jquery';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
export function categoriesHasErrored(bool) {
    return {
        type: 'CATEGORIES_HAS_ERRORED',
        hasErrored: bool
    };
}

export function categoriesIsLoading(bool) {
    return {
        type: 'CATEGORIES_IS_LOADING',
        isLoading: bool
    };
}

export function categoriesFetchDataSuccess(categories) {
    return {
        type: 'CATEGORIES_FETCH_DATA_SUCCESS',
      categories
    };
}
export function postCategory(details) {
    return {
        type: 'CATEGORIES_POST_DATA',
      details
    };
}
export function categoriesPostData(url,details) {
  console.log(details);
    return (dispatch) => {


     const request =   fetch(url,{
        method: 'POST',
        body: details,
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json'
        })

      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      }).then((details) => dispatch(postCategory(details)));

  return Observable.from(request);
/*$.ajax({
            url: url,
            type: "POST",
            crossDomain: true,
            data: JSON.stringify(details),
            contentType: "application/json",
            success: function (response) {
                var resp = JSON.parse(response)
                alert(resp.status);
            },
            error: function (xhr, status) {
                alert("error");
            }
        });*/
    };
}


export function categoriesFetchData(url) {
    return (dispatch) => {
        dispatch(categoriesIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(categoriesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((categories) => dispatch(categoriesFetchDataSuccess(categories)))
            .catch(() => dispatch(categoriesHasErrored(true)));
    };
}
