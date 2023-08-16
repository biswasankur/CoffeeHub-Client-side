import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let toster=inject(ToastrService)
  let router = inject(Router)
  if (sessionStorage.getItem('token') != null) {
    return true;
  } else {
    alert("you need to login first to vist this page")
    router.navigate(['/login'], {
      queryParams: { returnUrl: state.url }
    })
    return false;
  }};
