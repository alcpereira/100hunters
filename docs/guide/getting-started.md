# Getting Started

## Install the application

We have decided to install the application with pnpm package manager.

You can find here the reason we choose to use pnpm by reading this article from Nhost. Click [here](https://nhost.io/blog/how-we-configured-pnpm-and-turborepo-for-our-monorepo).

## Setup Instructions

1. Clone the [repository](https://github.com/alcpereira/100hunters.git) to your local machine.  
   `git clone https://github.com/alcpereira/100hunters.git`
2. Navigate to the project directory.
3. Install dependencies using pnpm install.  
   `bash pnpm install`  
   if your installation get some error messages, you can try the following command  
   `bash pnpm install --shamefully-hoist`  
   to try to solve the problem.
4. Set up the backend server and [database](/database).
5. Run the frontend application using  
   ` pnpm start`
6. Access the application through your web browser.
7. Sign up or log in to start using the Kanban board for managing your job hunt.
