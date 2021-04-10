import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';


export default function Leads(){
    return (
        <Layout branch>
            <form class="row g-3">
                <div class="col-12">
                    <h3>Customer Information</h3>
                    <br/>
                    <br/>
                </div>
                <div class="col-md-6">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName"/>
                </div>
                <div class="col-md-6">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="lastName"/>
                </div>
                <div class="col-md-6">
                    <label for="buisName" class="form-label">Business Name</label>
                    <input type="text" class="form-control" id="buisName"/>
                </div>
                <div class="col-md-6">
                    <label for="buisSector" class="form-label">Business Sector</label>
                    <input type="text" class="form-control" id="buisSector"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip"/>
                </div>
                <div class="form-group col-12">
                    <label for="exampleFormControlTextarea1">Additional Information</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <div class="col-12">
                <br/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </Layout>
    )
}