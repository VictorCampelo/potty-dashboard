import axios from 'axios'

export default class BrasilApiRepository {
  async searchCep(cep: string) {
    const response = await axios.get<any>(
      `https://brasilapi.com.br/api/cep/v2/${cep}`
    )
    return response.data
  }
}
