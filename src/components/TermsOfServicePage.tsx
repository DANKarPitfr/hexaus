import { useNavigate } from 'react-router-dom';
import { TermsOfService } from './TermsOfService';

export function TermsOfServicePage() {
    const navigate = useNavigate();
    return <TermsOfService onClose={() => navigate('/')} />;
}
