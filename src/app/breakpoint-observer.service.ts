import {Injectable} from "@angular/core";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {filter, map, mergeAll, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BreakpointObserverService{
  breakpoint$:Observable<{size:string}>

  constructor(private breakpointObserver: BreakpointObserver) { this.breakpoint$ = this.breakpoint(); }

  private breakpoint() {
    console.log("BREAKPOINT INITIALIZED")

    let lrg = this.breakpointObserver.observe(['(min-width: 1024px) and (max-width: 1366px)']).pipe(
      map(({ matches }) => { if (matches) { return { size: "web" } } else { return { size: "unknown" } } }),
      tap(obj => {
        if (obj.size == "web") console.log('web')
      }));

    let sml = this.breakpointObserver.observe(['(min-width: 768px) and (max-width: 1024px)']).pipe(
      map(({ matches }) => { if (matches) { return { size: "tablet" } } else { return { size: "unknown" } } }),
      tap(obj => {
        if (obj.size == "tablet") console.log('tablet')
      })
    )
    let mobile = this.breakpointObserver.observe(['(min-width: 480px) and (max-width: 768px)']).pipe(
      map(({ matches }) => { if (matches) { return { size: "mobile" } } else { return { size: "unknown" } } }),
      tap(obj => {
        if (obj.size == "mobile") console.log('mobile')
      })
    )

    return of(lrg, sml, mobile).pipe(mergeAll(), filter(rets => rets.size != 'unknown'))
  }
}
