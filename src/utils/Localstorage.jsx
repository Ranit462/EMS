 
 const employees = [ 
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
       
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare sales report",
        description: "Compile and analyze Q2 sales data.",
        date: "2025-07-14",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client follow-up",
        description: "Call and follow up with client regarding contract renewal.",
        date: "2025-07-10",
        category: "Client Relations"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix login issue",
        description: "Debug user login bug in production.",
        date: "2025-07-11",
        category: "Technical"
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update website content",
        description: "Revise homepage content and images.",
        date: "2025-07-15",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit weekly timesheet",
        description: "Fill and submit timesheet before Friday.",
        date: "2025-07-12",
        category: "HR"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Conduct training session",
        description: "Run new employee onboarding training.",
        date: "2025-07-10",
        category: "Training"
      }
    ]
  },
  {
    id: 3,
    firstName: "Riya",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Test new software module",
        description: "Run unit and integration tests on module X.",
        date: "2025-07-16",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix email bug",
        description: "Resolve issue with notification emails not sending.",
        date: "2025-07-11",
        category: "Technical"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Attend leadership workshop",
        description: "Join the leadership seminar for project leads.",
        date: "2025-07-13",
        category: "Training"
      }
    ]
  },
  {
    id: 4,
    firstName: "Meera",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create invoice batch",
        description: "Generate invoice batch for July clients.",
        date: "2025-07-15",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Verify vendor payments",
        description: "Check and confirm outgoing payments.",
        date: "2025-07-12",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Review audit logs",
        description: "Analyze logs for anomalies or unauthorized access.",
        date: "2025-07-10",
        category: "Security"
      }
    ]
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design poster for event",
        description: "Create poster for annual tech conference.",
        date: "2025-07-17",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update social media banners",
        description: "Upload new banners for July campaign.",
        date: "2025-07-14",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit design feedback",
        description: "Provide feedback on mobile UI redesign.",
        date: "2025-07-11",
        category: "Design"
      }
    ]
  }
];

const admin = [{
  id: 1,
  
  email: "admin@example.com",
  password: "123"
}]

  



 
 
 
 export const setLocalStorage=()=>{
     localStorage.setItem('employees',JSON.stringify(employees))
     localStorage.setItem('admin',JSON.stringify(admin))
   

    
 }

 export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))
   
    return({employees,admin})
   
 }
  