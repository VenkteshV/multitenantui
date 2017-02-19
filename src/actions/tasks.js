import $ from 'jquery';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
export function tasksHasErrored(bool) {
    return {
        type: 'TASKS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function tasksIsLoading(bool) {
    return {
        type: 'TASKS_IS_LOADING',
        isLoading: bool
    };
}

export function tasksFetchDataSuccess(tasks) {
    return {
        type: 'TASKS_FETCH_DATA_SUCCESS',
    tasks
    };
}
export function postTask(details) {
    return {
        type: 'TASKS_POST_DATA',
      details
    };
}
export function tasksPostData(url,details) {
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
      }).then((details) => dispatch(postTask(details)));

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


export function tasksFetchData(url) {
    return (dispatch) => {
        dispatch(tasksIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(tasksIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((tasks) => dispatch(tasksFetchDataSuccess(tasks)))
            .catch(() => dispatch(tasksHasErrored(true)));
    };
}
