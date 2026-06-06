import { useNavigate } from 'react-router-dom';
import { PrivacyPolicy } from './PrivacyPolicy';

export function PrivacyPolicyPage() {
    const navigate = useNavigate();
    return <PrivacyPolicy onClose={() => navigate('/')} />;
}
