import Button from '@restart/ui/esm/Button';
import { Table } from 'react-bootstrap';
export const LoginPage = () => {
    return (
      <div>
          <Button className="btn-ajou">ajouter</Button>{' '}
          <Table striped bordered hover style={{marginLeft:"60px"}}>
            <thead>
                <tr>
                <th># id</th>
                <th>societe</th>
                <th>commende</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="id">1</td>
                    <td>telecom</td>
                    <td className="commende">80%</td>
                    <td className="td-btn">
                        <Button className="btn-sup">supprime</Button>{' '}
                        <Button className="btn-modif">modifie</Button>{' '}
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>orange</td>
                    <td>100%</td>
                    <td>
                        <Button className="btn-sup">supprime</Button>{' '}
                        <Button className="btn-modif">modifie</Button>{' '}
                    </td>
                </tr>
            </tbody>
        </Table>
        <Button className="btn-déco">déconnecter</Button>{' '}
      </div>
    )
  }