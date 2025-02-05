export async function getstudent() {
    
    const response = await fetch('https://dummyjson.com/student',{cache: 'no-store'})
  
    if(!response.ok){
          throw new Error("ไม่สามารถ Fetch Data ได้")
    }
    return response.json()
}