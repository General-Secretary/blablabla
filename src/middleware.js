import { NextResponse } from "next/server";
export function middleware(req) {
    const token = req.cookies.get("token")?.value;
    const role = req.cookies.get("role")?.value;
    const url = req.nextUrl.clone();
    const protectedRoutes = ["/homePage","/startUpProfile","/startupEdit","/charityEdit","/investorEdit","/supportOrganizationEdit","/IncubatorProfile","/investorProfile","/charityProfile"];
    const reverseProtectedRoutes = ["/Login","/","/charity","/IncubatorSignUp","/InvestorSignUp","/startUpSignUp"];
    if (reverseProtectedRoutes.includes(url.pathname) && token) {
        url.pathname = "/homePage"; 
        return NextResponse.redirect(url);
    }
    if (protectedRoutes.includes(url.pathname) && !token) {
        url.pathname = "/Login"; 
        return NextResponse.redirect(url);
    }
    return NextResponse.next(); 
}

export const config = {
    matcher: ["/homePage","/startupEdit","/charityEdit","/investorEdit","/supportOrganizationEdit", "/Login","/","/charity","/IncubatorSignUp","/InvestorSignUp","/startUpSignUp","/startUpProfile","/IncubatorProfile","/investorProfile","/charityProfile"], 
};

