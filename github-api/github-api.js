class Github {
  constructor() {
    this.url = "https://api.github.com/users/"; //apinin temel url sini aldık.
  }

  async getGithubData(username) {
    //forma girilen username i aldık
    const responseUser = await fetch(this.url + username); //url nin sonuna ekleyip apide ki kullanıcıya eriştik. fetch bize response obesi dönecek ve resolve olduğunda, response objemiz responseUser constmuza atanmış olacak.
    const responseRepo = await fetch(this.url + username + "/repos"); //daha sonra /repos ekleyerek kullanınıcının repolarına ulaştık.

    const userData = await responseUser.json(); //yukarda oluşturduğumuz response objelerimizin içindeki json a ulaştık.
    const repoData = await responseRepo.json();

    return {
      //yukarda oluşturduklarımızı main.js dosyamızda kullanacağımız için return olacak dönüyoruz.
      user: userData,
      repo: repoData,
    };
  }
}
